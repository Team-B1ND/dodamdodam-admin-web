import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import { usePatchParentPhoneMutation } from "quries/phone/phone.query";
import { useState } from "react";
import { patchParentPhoneNumberParam } from "repositories/PhoneRepository/phoneRepository.param";

const usePhoneNumber = () => {
  const [phone, setPhone] = useState<{ [key: string]: string }>({});

  const patchParentPhone = usePatchParentPhoneMutation();

  const handlePhoneNumber = (id: string, parentPhone: string) => {
    setPhone((prev) => ({ ...prev, [id]: parentPhone }));
  };

  const phoneNumber = ({ id, parentPhone }: patchParentPhoneNumberParam) => {
    const params = {
      id: id,
      parentPhone: parentPhone,
    };
    patchParentPhone.mutate(params, {
      onSuccess: () => {
        B1ndToast.showSuccess("전화번호 등록 성공");
      },
      onError: (err) => {
        B1ndToast.showError((err as AxiosError).message);
      },
    });
  };

  return {
    phone,
    handlePhoneNumber,
    phoneNumber,
  };
};

export default usePhoneNumber;
