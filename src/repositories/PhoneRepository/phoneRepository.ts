import customAxios from "lib/axios/customAxios";
import { patchParentPhoneNumberParam } from "./phoneRepository.param";

class PhoneRepository {
  public async patchParentPhoneNumber({ id, parentPhone }: patchParentPhoneNumberParam): Promise<void> {
    await customAxios.patch(`/member/student/info/${id}`, { parentPhone });
  }
}
const phoneRepository = new PhoneRepository();
export default phoneRepository;
