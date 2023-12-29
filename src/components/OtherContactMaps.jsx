import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBranchList } from '../actions/MainAction';

const OtherContactMaps = () => {

  const dispatch = useDispatch();
  const { branchListArr } = useSelector(state => state.Data);





  useEffect(() => {
    dispatch(getBranchList())
  }, [dispatch])
  return (


    <div className='other_contact_maps'>

      {
        [...branchListArr]?.reverse().map((data, i) => {
          return data.is_active ? <iframe title='location' src={data.map_url} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> : null
        })
      }

    </div>
  )
}

export default OtherContactMaps