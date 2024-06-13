import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../components'

const EditProfile = ({navigation}) => {
    return (
        <SafeAreaView style={{padding:30, flex:1}} >
            <View style={{ alignContent: "center", paddingBottom: 30 }} >
                <Text style={{ textAlign: "center", fontSize: "30" }}>Edit Profil</Text>
            </View>
            <View style={{ paddingBottom: 30 }}>
                <Text>Ganti Nama</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        height:50
                    }}
                />
            </View>
            <View style={{ paddingBottom: 30 }}>
                <Text>Ganti Email</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        height:50
                    }}
                />
            </View>
            <Button
        left={false}
        text={"Selesai"}
        op={() => navigation.navigate("Profile")}
        full={true}
      />
            
        </SafeAreaView>
    )
}

export default EditProfile