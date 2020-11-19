import React from 'react'
import Weather from './Weather'

export default {
    title: "Weather",
    component: Weather
}

export const weatherExample = () => <Weather temperature={10}></Weather>