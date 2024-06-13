import { View, Text, Switch, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Profile, Button, Separator } from "../components";
import { ImageBackground, Image, Center } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "@react-navigation/native";




const ProfileScreen = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(false);


  return (
    <View style={{ flex: 1, paddingVertical: 20, paddingHorizontal: 20 }} >
      <View style={{ flexDirection: "row", padding: 20 }}>
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}
            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
          />
        </View>
        <View style={{ flex: 2, borderWidth: 1, height: 100 }}>
          <Profile name={"Rizki"} />
          <Text style={{ paddingHorizontal: 20 }}>Email: rizk@yahoo.com</Text>
          <Text style={{ paddingHorizontal: 20 }}>No Hp: 0894532154521</Text>
        </View>
      </View>
      {/* SC */}
      <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 200, width: "80%" }}>
          <Text style={{ fontSize: 30 }}>Edit Profil</Text>
          <Text>Ubah Nama, Sandi, Email</Text>
        </View>
        <View style={{ height: 200, width: "20%", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("EditProfil")}>
            <Ionicons name="arrow-forward-outline" size={40} />
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
      <View style={{ height: 100, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 200, width: "80%" }}>
          <Text style={{ fontSize: 30 }}>About Us</Text>
          <Text>Apa itu Netris?</Text>
        </View>
        <View style={{ height: 200, width: "20%", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Ionicons name="arrow-forward-outline" size={40} />
          </TouchableOpacity>
        </View>
      </View>
      {/* 2 */}
      <View style={{ height: 200, width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ height: 200, width: "80%" }}>
          <Text style={{ fontSize: 30 }}>Hubungi Kami</Text>
          {selectedOption && selectedOption && (
            <View height={160} width="100%" >
              <View style={{ paddingTop: 20, height: 80 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => Linking.openURL('https://api.whatsapp.com/send/?phone=%2B6281226416123&text&type=phone_number&app_absent=0')}
                >
                  < Ionicons
                    size={30}
                    name="call" />
                  <Text style={{ fontSize: 20, color: "purple" }}>WA ADMIN</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingTop: 20, height: 80, flex: 2 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => Linking.openURL('https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=aliciaindira06@gmail.com')}
                >
                  < Ionicons
                    size={30}
                    name="mail" />
                  <Text style={{ fontSize: 20, color: "purple" }}>EMAIL ADMIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>


        <View style={{ height: 200, width: "20%", alignItems: "center" }}>
          < Ionicons
            size={40}
            onPress={() => {
              setSelectedOption(!selectedOption);
            }}
            name="arrow-forward" />
        </View>

      </View>
   


      <Separator h={50} />
      <Button
        left={false}
        text={"Keluar"}
        op={() => navigation.navigate("Login")}
        full={true}
      />
    </View>
  );
};



export default ProfileScreen;
