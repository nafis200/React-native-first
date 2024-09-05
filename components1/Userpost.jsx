
import { View, Text,Image } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'

import Userpoststyle from './Userpoststyle'

const Userpost = (props) => {
  return (
    <View>


      <View style={Userpoststyle.userInformationContainer}>
      <View style={Userpoststyle.information}>
      <Image style={{backgroundColor:'white',marginTop:20,borderRadius:100}} source={require('../assets/images/72 - default-profile.png')}/>
      <View style={Userpoststyle.userPostInformation}>
      <Text style={Userpoststyle.name}>{props.firstName} {props.lastName} </Text>
      {props.location && <Text style={Userpoststyle.location}>{props.location}</Text> }
      </View>
      </View>
      <FontAwesomeIcon icon={faEllipsis} size={22} style={{backgroundColor:'white'}} />
      </View>


      <View style={Userpoststyle.containers}>
      <Image resizeMode='cover' style={{backgroundColor:'white',marginTop:10}} source={require('../assets/images/76 - default-post.png')} />
      </View>

      <View style={Userpoststyle.userpost}>
       <View style={Userpoststyle.userbutton}>
       <FontAwesomeIcon style={{backgroundColor:'white'}} icon={faHeart} />
       <Text>{props.likes}</Text>
       </View>
       <View style={Userpoststyle.userbutton}>
       <FontAwesomeIcon style={{backgroundColor:'white'}} icon={faComment} />
       <Text>{props.comments}</Text>
       </View>
       <View style={Userpoststyle.userbutton}>
       <FontAwesomeIcon style={{backgroundColor:'white'}} icon={faBookmark} />
       <Text>{props.bookmarks}</Text>
       </View>
       </View>

    </View>
  )
}

Userpost.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
}

export default Userpost