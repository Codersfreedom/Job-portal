import React, { useEffect } from 'react'
import useJobStore from '../../store/company/useJobStore'

const HomeContent = () => {
  const { appliedUsers, getAppliedUsers } = useJobStore()
  useEffect(() => {
    getAppliedUsers();
  }, [])
  console.log(appliedUsers)
  return (
    <div>

    </div>
  )
}

export default HomeContent
