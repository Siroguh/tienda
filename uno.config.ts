import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['rounded-50p', { 'border-radius': '50%' }],
    ['font-canela', { 'font-family': 'canela' }],
    ['text-rojo', { 'color': 'rgb(245, 59, 51)' }],
    ['bg-rojo', { 'background-color': 'rgb(245, 59, 51)' }],
    ['border-rojo', { 'border-color': 'rgb(245, 59, 51)' }],
    ['text-negro', { 'color': 'rgb(84, 31, 43)' }],
    ['bg-negro', { 'background-color': 'rgb(84, 31, 43)' }],
    ['border-negro', { 'border-color': 'rgb(84, 31, 43)' }]
  ],
})