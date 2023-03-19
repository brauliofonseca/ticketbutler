import { useEffect, useRef } from 'react'
import { useEthers } from '@usedapp/core'
import Jazzicon from '@metamask/jazzicon'
import styled from '@emotion/styled'

const StyledIdenticon = styled.div`
	height: 1rem;
	width: 1rem;
	border-radius: 1.125rem;
	background-color: black;
`

const Identicon = () => {
	const ref = useRef(null)
	const {account} = useEthers()

	useEffect(() => {
		if (account && ref.current) {
			ref.current.innerHTML = ""
			ref.current.appendChild(Jazzicon())
		}
	}, [account])

	return <StyledIdenticon ref={ref}/>
}

export default Identicon
