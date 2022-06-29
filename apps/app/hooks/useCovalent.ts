import axios from 'axios';
export const useCovalent = () => {
  const API_KEY = '?key=ckey_78847bb78d8647f4a69d19fbaeb';
  const baseAPI = 'https://api.covalenthq.com/v1';

  const getTokens = async (chainId: number, nftAddress: string) => {
    return (
      await axios.get<{
        data: {
          items: {
            contract_decimals: number;
            contract_name: string;
            contract_ticker_symbol: string;
            contract_address: string;
            supports_erc: null;
            logo_url: string;
            token_id: string;
          }[];
        };
        error: boolean;
      }>(`${baseAPI}/${chainId}/tokens/${nftAddress}/nft_token_ids/${API_KEY}`)
    ).data;
  };
  //   https://api.covalenthq.com/v1/1/tokens/0xe4605d46fd0b3f8329d936a8b258d69276cba264/nft_metadata/123/?key=ckey_78847bb78d8647f4a69d19fbaeb

  const getTokenMetadata = async (
    chainId: string,
    nftAddress: string,
    tokenId: string
  ) => {
    return axios.get<{
      data: {
        updated_at: string;
        items: {
          nft_data: {
            token_id: string;
            external_data: {
              name: string;
              description: string;
              image: string;
              image_256: string;
              image_512: string;
              image_1024: string;
              animation_url: string;
              external_url: string;
              attributes: string;
              owner: string;
            };
          }[];
        }[];
      };
    }>(
      `${baseAPI}/${chainId}/tokens/${nftAddress}/nft_metadata/${tokenId}/${API_KEY}`
    );
  };

  return { getTokens, getTokenMetadata };
};
