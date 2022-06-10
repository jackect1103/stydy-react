import {
  SUB_NUMBER,
  ADD_NUMBER
} from './constants.js'

export const addAction = num =>({
  type:ADD_NUMBER,
  num
})

export const subAction = num =>({
  type:SUB_NUMBER,
  num
})