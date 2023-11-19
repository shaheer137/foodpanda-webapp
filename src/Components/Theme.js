import { useDispatch } from 'react-redux'
import { updateTheme } from '../store/theme'

export default function Theme() {
  const dispatch = useDispatch()

  return <div className='theme-box'>
    <div
      onClick={() => dispatch(updateTheme('black-theme'))} className='black box'><img width={38} src='https://static.thenounproject.com/png/1664849-200.png' /></div>
    <div
      onClick={() => dispatch(updateTheme('white-theme'))} className='white box'><img width={38} src='https://cdn2.iconfinder.com/data/icons/user-interface-vol-2-14/48/brightness-light-up-day-mode-512.png' /></div>
  </div>
}