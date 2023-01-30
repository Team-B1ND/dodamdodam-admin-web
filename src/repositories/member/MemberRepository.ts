import axios from "axios";
import config from "../../config/config.json";
import { getMembersResponse } from "./memberRoomRepository.res";

class MemberRepository {
  public async getMembersInfo(): Promise<getMembersResponse> {
    const { data } = await axios.get(`${config.SERVER}/members`);
    return data;
  }
}

export default new MemberRepository();
