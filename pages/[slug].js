import React from 'react';
import fs from 'fs'; // fs ini adalah file sistem,..biasanya running di server, dan local komputer
                     // tapi ga running di browser,...cuma web kan pasti running di server jadi ya pasti jalan pas production


const Post = ({slug}) => {



    return ( 
        <div>
            The slug for this page is: {slug}
        </div>
     );
}

// Ada 2 fungsi utama dalam membangun static website (atau bisa dibilang traditional website) yang harus digunakan yaitu:
// getStaticPaths  == fungsi ini untuk menentukan router url ala static nextjs (mirip kek router.push);
//


//fungsi ini mendapat export agar komponen lain dapet pake
export const getStaticPaths = async () => { 

    const files = fs.readdirSync('post') // readdirSync ini untuk membaca isi content didalam folder,..sifat readdirSyn adalah syncronus alias ga balikin promise
                                        // readirSyn akan membuat const files menjadi array [docker-linux,faq]
    console.log("files",files);
    const paths = files.map(filename => ({
        params: {
            slug:filename.replace(".md","")// slug disini harus sesuai dengan nama file [slug].js
        }
    }))
    console.log('paths:',[paths]);
    // getStaticPath punya 2 balikan atau mengembalikan 2 objek
    return{
        // path ini harus bentuknya array,..tapi kalo misal mau mapping ga usah pake array,..karena map akan buat array otomatis
        paths,
        fallback: false // fallback false artinya kita akan membangun pada saat build 
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    return{
        props: {
            // apa yang di taruh didalam props ini akan digunakan untuk komponen Post nya (komponen yang ini)
            slug
        }
    }
}
 
export default Post;