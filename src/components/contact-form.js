import React from "react"
import fujiwe from "../images/fuji-nye.jpg"

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name: '',
        email_address: '',
        phone: '',
        formclass: 'mt-5 md:mt-0 md:col-span-2',
        messageclass: 'hidden',
        message: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
        const formdata = {"data": {
            "properties": {
              "email": this.state.email_address,
              "firstname": this.state.first_name,
              "phone": this.state.phone
            }
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
                const msg = 'Thank you ' + this.state.first_name + ', I will contact you soon!';
                this.setState({formclass: 'hidden', messageclass: 'mt-5 md:mt-0 md:col-span-2', message: msg});
            });
        
        event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-2xl font-medium leading-6 text-gray-900">我們可以發送免費教培訓片到那個電郵地址
我會有一個免費培訓課程發送給你</h3>
                <p className="mt-1 text-sm text-gray-600">
                  
                </p>
                <img className="h-96 mt-4" src={fujiwe} alt="Fuji Pic" />
              </div>
            </div>
            <div className={this.state.messageclass}>
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                    {this.state.message}
                    </div>
                </div>
            </div>
            <div className={this.state.formclass}>
              <form onSubmit={this.handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">你的名字... (e.g. Fuji)</label>
                        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">你的電郵地址... (e.g. 0123@qq.com)</label>
                        <input type="text" name="email_address" value={this.state.email_address} onChange={this.handleChange} id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">手机号码... e.g. (+1) 818-777-1234</label>
                        <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
    </div>
      );
    }
  }

  export default ContactForm;