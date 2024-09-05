
import { View, Text,Image } from 'react-native'
import React from 'react'
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart } from '@fortawesome/free-solid-svg-icons'
const Userpost = (props) => {
  return (
    <View>
      <View>
      <View>
      <Image style={{backgroundColor:'white',marginTop:20}} source={require('../assets/images/72 - default-profile.png')}/>
      <Text>{props.firstName} {props.lastName} </Text>
      {props.location && <Text>{props.location}</Text> }
      </View>
      <FontAwesomeIcon icon={faEllipsis} style={{backgroundColor:'white'}} />
      </View>
      <Image style={{backgroundColor:'white',marginTop:10}} source={require('../assets/images/76 - default-post.png')} />

      <View>
       <View>
       <FontAwesomeIcon style={{backgroundColor:'white'}} icon={faHeart} />
       <Text>{props.likes}</Text>
       </View>
       <View>
       <FontAwesomeIcon style={{backgroundColor:'white'}} icon={faComment} />
       <Text>{props.comments}</Text>
       </View>
       <View>
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