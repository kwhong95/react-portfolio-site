import React, { useContext } from 'react';
import Logo from '../../components/Logo'
import { LoadingContext } from 'react-router-loading'
import {
  Wrap,
  Content,
  Progress,
  Inner
} from './elements';

const Loader = async() => {
  const loadingContext = useContext(LoadingContext)
  loadingContext.start()
  return (
    <Wrap>
      <Logo />
      <Content>Please wait a moment...</Content>
      <Progress>
        <Inner />
      </Progress>
    </Wrap>
  )

}

export default Loader