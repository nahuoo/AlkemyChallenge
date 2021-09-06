import React from 'react'


    export async function getStaticProps() {
        fetch('https://superheroapi.com/api/10226206302529619/'+ props.id)
        .then (res => res.json())
        .then (data => console.log(data))
        return {
          superheroes : data
        }
    }
 
