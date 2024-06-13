import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop :20
  },

});



const Profile = (props) => {
  return (
    <>
      <View style=
        {styles.container}>

        <Text
          style={{
            fontFamily: "Inter_600SemiBold",
            fontSize: 16,
          }}
        >
          Halo, {props.name}
        </Text>
      

      </View>
    </>
  );
};

export default Profile;
