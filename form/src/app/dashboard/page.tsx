'use client';


import React from "react";

import { ChartComponente } from "../components/chart";

import { Box } from "@mui/material";

export default function Dashboard(){

    const fieldData = {
        labels: ["Front-End", "Back-End", "mobile", "Other"],
        datasets: [
          {
            label: 'Field',
            data: [12, 19, 3, 5],
            backgroundColor: "lightblue", // Cor de fundo das barras do gráfico
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras do gráfico
            borderWidth: 1, // Largura da borda das barras do gráfico
          },
        ],
    };
    const experienceData = {
        labels: ["1 year", "2 year", "3 year", "4 year", "5 year"],
        datasets: [
          {
            label: 'Field',
            data: [12, 19, 3, 5, 10],
            backgroundColor: ["red", "blue" , "yellow", "green", "pink"], // Cor de fundo das barras do gráfico
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras do gráfico
            borderWidth: 1, // Largura da borda das barras do gráfico
            font:{
                size:20,
            }
        },
        ],
    };
    return(
        <React.Fragment>
                <h1>Dashboard</h1>
                <Box className="">
                    <ChartComponente data={fieldData} type="bar"/>
                    <ChartComponente data={experienceData} type="pie"/>
                </Box>
                
        </React.Fragment>
    )
}