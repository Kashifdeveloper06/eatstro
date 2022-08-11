import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

const endpoint = 'https://mockend.com/lakhanmandloi/fake-api/graphql'

const postsQueryDocument = gql`
        query {
			items {
				id
			    desc
			    dietaryChoice
			    favoriteCount
			    photo
			    price
			    kitchen {
			      id
			      name
			      photo
			    }
          	}
        }
      `
export const usePosts = () =>	 {
  return useQuery(["items"], async () => {
    const items = await request(endpoint,postsQueryDocument);
    return items;
  });
}	
