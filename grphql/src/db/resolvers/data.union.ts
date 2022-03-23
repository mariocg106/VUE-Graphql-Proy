import { IResolvers } from "@graphql-tools/utils";


const typesUnionResolvers: IResolvers = {
    car: { 
    __resolveType(obj: { cifm: string; cifCA: string }) {
     
      if (obj.cifm) {
        return "car";
      }

      if (obj.cifCA) {
        return "car";
      }
      return null; 
    },
  },
  
  
};

export default typesUnionResolvers;

