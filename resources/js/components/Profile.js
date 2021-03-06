import React, { Component } from 'react'
import {Provider, Context} from '../store/store'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Profile extends Component {
  constructor(context){
    super(context)
    this.cancelEvent=this.cancelEvent.bind(this)
    this.state={
      image : '',
      name: '',
      eventsCreated : [],
      eventsParticipateIn : []
    }
  }

  async getProfile(){
    if (!this.state.name){
      let response;
      let res
      try {
        let request = Axios({
          method:'get',
          url : '/api/me',
          headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
        });
        let req = Axios({
          method:'get',
          url : '/api/events/userevents',
          headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
        })
        res=  await req
        response = await request;
        this.setState({
          name: response.data.name,
          image : response.data.avatar ,
          eventsCreated : res.data.created_events,
          eventsParticipateIn : res.data.participates_in
        })
      } catch(e) {
        console.log(e);
        console.log(e.response);
      }
    }
  }

  async cancelEvent(eventID){
    let response
    try {
      let request = Axios({
        method:'delete',
        url : 'api/events/'+eventID,
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
      });
      response = await request;
    }catch(e) {
      console.log(e);
      console.log(e.response);
    }
  }
  componentDidMount(){
    this.getProfile()



  }
  componentDidUpdate(){
    this.getProfile()
  }

  render() {
    return (
      <React.Fragment>
        <div className="profileContainer container mt-5 w-100">
          <h1 className="text-center mt-3 mb-3">Your profile</h1>
          <img src={(this.state.image ? "data:image;base64,"+this.state.image :"https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png")} className="rounded-circle border border-light shadow ofc text-center mt-3" width="150px" height="150px" />  
          <h1 className="ml-5">{this.state.name} <Link to="/edit-profile">
            <i className="edition fa fa-edit ml-5">edit profile</i>
          </Link>
          </h1>
          <hr/>
          <div className="eventProf row justify-content-between mt-5">
            <div className="col-md-6"><h2>My events</h2>  {this.state.eventsCreated.map(events => ( <p key={events.id + 'created'}><Link to={"/event/"+events.id}>{events.title}</Link> <div className="float-right"> <Link to={"/edit/event/"+events.id}><i className="fa fa-edit"></i></Link> <a href="javascript:void()" onClick={() => this.cancelEvent(events.id)}><i className="fa fa-trash"></i></a></div> </p>))}</div>
            <div className="col-md-6"><h2>Events I attend</h2>{this.state.eventsParticipateIn.map(events => ( <p key={events.id + 'participates'}><Link to={"/event/"+events.id}>{events.title}</Link> </p>))}</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Profile.contextType = Context
