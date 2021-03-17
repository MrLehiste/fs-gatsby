import React from "react"
import fujiwe from "../images/fuji-nye.jpg"
import ReactPlayer from 'react-player/file'

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form_state: 1,
        hub_id: "0",
        first_name: '',
        last_name: '',
        email_address: '',
        phone: '',
        country_city: '',
        how_to_contact: '',
        wechat: '',
        skype: '',
        business_website: '',
        monthly_income: '',
        target_income: '',
        biggest_obstacle: '',
        business_description: '',
        invest_now: '',
        when_start: '',
        your_specialty: '',
        form1class: 'mt-10 sm:mt-0',
        form2class: 'hidden',
        form3class: 'hidden'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSubmit2 = this.handleSubmit2.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
        if(this.state.email_address === "") { console.log("no email"); event.preventDefault(); return;}
        const formdata = {
          "data": {
            "properties": {
              "email": this.state.email_address,
              "firstname": this.state.first_name,
              "phone": this.state.phone
            }
          },
          "options":{
            "path": "/crm/v3/objects/contacts",
            "method": "POST"
          }
        };
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formdata)
        };
        console.log(formdata);
        fetch('https://8bftgvw7vl.execute-api.us-east-1.amazonaws.com/dev/hubspot', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const jdata = JSON.parse(data);
                var hubid = "0";
                if(jdata.message){
                  console.log("HAS message");
                  hubid = jdata.message.split('ID: ')[1];
                }
                else{
                  console.log("New user");
                  hubid = jdata.id;
                }
                console.log("ID>", hubid);
                this.setState({
                  form_state: this.state.form_state + 1,
                  form1class: 'hidden', 
                  form2class: 'mt-5 md:mt-0 md:col-span-2',
                  hub_id: hubid
              });
            });
        
        event.preventDefault();
    }

    handleSubmit2(event) {
        if(this.state.email_address === "") { console.log("no email"); event.preventDefault(); return;}
        
        console.log('FORM 2 Updated');
        const form2data = {
          "data": {
            "properties": {
              "email": this.state.email_address,
              "firstname": this.state.first_name,
              "lastname": this.state.last_name,
              "phone": this.state.phone,
              "country": this.state.country_city,
              "how_to_contact": this.state.how_to_contact,
              "wechat": this.state.wechat,
              "skype": this.state.skype,
              "website": this.state.business_website,
              "monthly_income": this.state.monthly_income,
              "target_income": this.state.target_income,
              "biggest_obstacle": this.state.biggest_obstacle,
              "business_description": this.state.business_description,
              "invest_now": this.state.invest_now,
              "when_start": this.state.when_start,
              "your_specialty": this.state.your_specialty
            }
          },
          "options":{
            "path": "/crm/v3/objects/contacts/" + this.state.hub_id,
            "method": "PATCH"
          }
        };
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form2data)
      };
      console.log(form2data);
      fetch('https://8bftgvw7vl.execute-api.us-east-1.amazonaws.com/dev/hubspot', requestOptions)
          .then(response => response.json())
          .then(data => {
              console.log(data);
              this.setState({
                form_state: this.state.form_state + 1,
                form2class: 'hidden', 
                form3class: 'mt-5 md:mt-0 md:col-span-2'
              });
          });
        
        event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <div className="hidden sm:block" aria-hidden="true" id="formTopDivider">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <div className={this.state.form1class} id="divForm1">
          <div className="md:grid md:grid-cols-3 md:gap-6">

            <div className="md:col-span-1 flex flex-wrap justify-center">
              <div className="px-4 sm:px-0">
                <img className="h-96 shadow-lg rounded max-w-full h-auto align-middle border-none" src={fujiwe} alt="Fuji Pic" />
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={this.handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <h1 className="text-2xl font-bold text-gray-700 ">我們可以發送免費教培訓片到那個電郵地址我會有一個免費培訓課程發送給你</h1>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">你的名字... (e.g. Fuji)</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">你的電郵地址... (e.g. 0123@qq.com)</label>
                        <input type="text" name="email_address" value={this.state.email_address} onChange={this.handleChange} id="email_address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">手机号码... e.g. (+1) 818-777-1234</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} id="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    立即預留座位
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>{/* divForm1 */}

        <div className={this.state.form2class} id="divForm2">
          <div className="md:grid md:grid-cols-3 md:gap-6">

            <div className="md:col-span-1 flex flex-wrap justify-center">
              <div className="px-4 sm:px-0 align-top">
                <ReactPlayer width="100%" className="my-auto"
                  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                  poster="https://video.fujisuzuki.com/funnel/new1/0715-2a.jpg"
                  url={[
                    {src: 'https://video.fujisuzuki.com/funnel/new1/0715-2a1.mp4', type: 'video/mp4'},
                    {src: 'https://video.fujisuzuki.com/funnel/new1/0715-2a1.webm', type: 'video/webm'}
                  ]}
                />
              </div>
            </div>

            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={this.handleSubmit2}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <h1 className="text-2xl font-bold text-gray-700 ">步驟 2/2: 請完成以下問卷以確保你取得免費專業諮詢</h1>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-bold text-gray-700">你的名字*</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-bold text-gray-700">你的姓氏*</label>
                        <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange} id="last_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <input type="hidden" name="email_address" value={this.state.email_address} id="email_address" />
                      <input type="hidden" name="phone" value={this.state.phone} id="phone" />
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country_city" className="block text-sm font-bold text-gray-700">國家城市*</label>
                        <input type="text" name="country_city" value={this.state.country_city} onChange={this.handleChange} id="country_city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="how_to_contact" className="block text-sm font-bold text-gray-700">請選擇諮詢方法*</label>
                        <select name="how_to_contact" value={this.state.how_to_contact} onChange={this.handleChange} id="how_to_contact" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="Phone call">電話</option>
                            <option value="Wechat">WeChat 微信</option>
                            <option value="Skype"> Skype 視頻通話</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="wechat" className="block text-sm font-bold text-gray-700">微信聯繫資料*</label>
                        <input type="text" name="wechat" value={this.state.wechat} onChange={this.handleChange} id="wechat" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="skype" className="block text-sm font-bold text-gray-700">電話號碼或 Skype ID（如果您要求以 Skype 視頻通話）</label>
                        <input type="text" name="skype" value={this.state.skype} onChange={this.handleChange} id="skype" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="business_website" className="block text-sm font-bold text-gray-700">您的商業網站地址（如果您沒有，請輸入"沒有"）*</label>
                        <input type="text" name="business_website" value={this.state.business_website} onChange={this.handleChange} id="business_website" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="monthly_income" className="block text-sm font-bold text-gray-700">現時每月平均收入</label>
                        <select name="monthly_income" value={this.state.monthly_income} onChange={this.handleChange} id="monthly_income" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="Less than $1,000 per month">月入少於 USD $1,000</option>
                            <option value="$1,000 - $5,000 per month">每月收入 USD $1,000 - $5,000 </option>
                            <option value="$5,000 - $10,000 per month">每月收入 USD $5,000 - $10,000 </option>
                            <option value="$10,000 - $20,000 per month">每月收入 USD $10,000 - $20,000</option>
                            <option value="$20,000 - $50,000 per month">每月收入 USD $20,000 - $50,000</option>
                            <option value="$50,000 per month or more">每月收入 USD $50,000 或以上</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="target_income" className="block text-sm font-bold text-gray-700">目標每月收入?*</label>
                        <input type="text" name="target_income" value={this.state.target_income} onChange={this.handleChange} id="target_income" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="biggest_obstacle" className="block text-sm font-bold text-gray-700">要達到收入目標的最大障礙是什麼?*</label>
                        <textarea name="biggest_obstacle" value={this.state.biggest_obstacle} onChange={this.handleChange} id="biggest_obstacle" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="business_description" className="block text-sm font-bold text-gray-700">請簡單描述你的業務，服務對象，賣的是什麼，以及什麼價格?*</label>
                        <textarea name="business_description" value={this.state.business_description} onChange={this.handleChange} id="business_description" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="invest_now" className="block text-sm font-bold text-gray-700">您是否願意並有能力立即投資去幫助您的業務增長?*</label>
                        <select name="invest_now" value={this.state.invest_now} onChange={this.handleChange} id="invest_now" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="Yes 我有足夠財力來投資令業務增長。"> 我有足夠財力來投資令業務增長。</option>
                            <option value="No 我沒有財力來投資令業務增長。"> 我沒有財力來投資令業務增長。</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="when_start" className="block text-sm font-bold text-gray-700">如果您被接受，您可以最快何時開始?*</label>
                        <input type="text" name="when_start" value={this.state.when_start} onChange={this.handleChange} id="when_start" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="your_specialty" className="block text-sm font-bold text-gray-700">最後, 請講解你與其他申請者有什麼不同令我們應該與你合作?*</label>
                        <textarea name="your_specialty" value={this.state.your_specialty} onChange={this.handleChange} id="your_specialty" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                      </div>
                      
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-left sm:px-6">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    立即預留座位
                    </button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>{/* divForm2 */}

        <div className={this.state.form3class} id="divForm3">
          <div className="md:grid md:grid-cols-3 md:gap-6 justify-center">
            <div className="mt-5 md:mt-0 md:col-span-2">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <h1 className="text-5xl font-bold text-gray-700 ">預約成功！</h1>
                    </div>
                    <div>
                      <ReactPlayer width="100%" className="align-top"
                        controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                        poster="https://video.fujisuzuki.com/funnel/0621-success.jpg"
                        url={[
                          {src: 'https://video.fujisuzuki.com/funnel/0621-success.mp4', type: 'video/mp4'},
                          {src: 'https://video.fujisuzuki.com/funnel/0621-success.webm', type: 'video/webm'}
                        ]}
                      />
                    </div>
                </div>
            </div>

          </div>
        </div>{/* divForm3 */}
        

        <div className="hidden sm:block" aria-hidden="true" id="formBottomDivider">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
    </div>
      );
    }
  }

  export default ContactForm;