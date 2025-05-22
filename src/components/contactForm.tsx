"use client";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { X } from "lucide-react";

import CustomFormItem from "@/app/form/input";
import { sentEmail } from "@/actions/email-actions";
import { Inputs } from "@/interfaces/inputs";

interface Props {
  onClose: () => void;
}

const ContactForm = ({ onClose }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  /*   const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event?.target)) onClose();
  }; */

  useEffect(() => {
    /*  document.addEventListener("click", handleClickOutside, true); */
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      // document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setLoading(true);
      await sentEmail(data);
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  console.log({ errors });

  return (
    <div
      className="relative z-12"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex sm:min-h-full mt-30 sm:mt-0  items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg p-5 pb-8"
            style={{ background: "#e8e8e8" }}
            ref={ref}
          >
            <div className="flex justify-end px-3 mt-4 mb-4">
              <X
                height={20}
                color="black"
                className="cursor-pointer"
                onClick={onClose}
              />
            </div>
            <h1 className="text-center text-2xl text-black uppercase font-bold mb-5">
              contÁctanos
            </h1>
            <form
              className="max-w-sm mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <CustomFormItem
                label="Nombre"
                name="name"
                validation={{ required: true }}
                error={errors["name"]}
                register={register}
                disabled={loading}
              />
              <CustomFormItem
                label="Email"
                name="email"
                register={register}
                error={errors["email"]}
                disabled={loading}
                validation={{
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                }}
              />
              <CustomFormItem
                label="Mensaje"
                name="message"
                register={register}
                type="textarea"
                validation={{ required: true }}
                disabled={loading}
                error={errors["message"]}
              />
              <button
                disabled={loading}
                type="submit"
                className="text-white bg-amber-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
              >
                Enviar
              </button>
              {loading && <span className="loader mt-3"></span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
