import React from "react";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";

function Room(){
    const {roomID}=useParams();
    let myMeeting= async (element)=>{
    const appID= 1773861983;
    const serverSecret="2f31326ca14ec590e33c0c6b6553c8d2";
    const kitToken= ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"Dheeraj")
    const zp= ZegoUIKitPrebuilt.create(kitToken);
     
    zp.joinRoom({
        container: element,
        sharedLinks:[
            {
                name:'Copy link',
                url:`http://localhost:3000/room/${roomID}`
                
            },
        ],
        scenario:{
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showRoomTimer: true
    })

    }
    return(
        <div ref={myMeeting}>
         
        </div>
    )
}
export default Room;