import { cryptoAssets, cryptoData } from './data'

export function fakeFetchCrypto() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoData)
		}, 500)
	})
}

export function fetchAssets() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(cryptoAssets)
		}, 100)
	})
}
