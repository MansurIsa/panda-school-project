import React, { useEffect } from 'react'
import PartnersContainer from './PartnersContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getPartnersList } from '../actions/MainAction'

const Partners = () => {

  const {partnersListArr}=useSelector(state=>state.Data)

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getPartnersList())
  },[dispatch])
  return (
    <div className='partners'>
        <PartnersContainer partnersListArr={partnersListArr}/>
    </div>
  )
}

export default Partners