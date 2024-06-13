import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'

const about = () => {
    return (

        <SafeAreaView>
            <ScrollView>
            <View h={"400"} w={"full"} style={{ padding: 20 }}>
                <Text style={{textAlign:"center", fontSize:30, fontWeight:30, padding:20}}>Tentang Kita</Text>
                <Image backgroundColor={"white.200"}
                    source={{ uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg' }}

                    style={{ height: 300, width: "full", marginBottom: 10, alignContent: "center" }}
                    rounded="lg"
                    alt="imagepn"
                />
                <View style={{ padding: 3 }}>
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                        NETRIS (Nearby Tire Reparation Information System) adalah aplikasi berbasis mobile yang dikembangkan untuk membantu pengendara menemukan layanan tambal ban terdekat di wilayah Surabaya. Dengan jumlah kendaraan bermotor yang terus meningkat di Indonesia, masalah ban bocor atau pecah menjadi hal umum. NETRIS menyediakan solusi dengan menggunakan Geographic Information System (GIS) dan Global Positioning Satellite (GPS) untuk menampilkan lokasi penambal ban terdekat dengan koordinat yang tepat.
                        Pengembangan aplikasi ini menggunakan Agile Software Development Life Cycle
                        (ASDLC) dengan menggunakan framework React Native, memungkinkan pengembangan aplikasi cross-platform yang efisien. Tahap pelaksanaan mencakup penentuan koordinat menggunakan GPS, pengumpulan datatambal ban, pembuatan database, dan merancang aplikasi. Hasil yang dicapai termasuk kemajuan pelaksanaan program, studi literatur, perancangan konsep dan desain aplikasi, serta pembuatan aplikasi. Aplikasi NETRIS diharapkan dapat membantu pengendara,
                        meningkatkan usaha tambal ban, dan memiliki potensi bisnis di era digital.                        </Text>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default about