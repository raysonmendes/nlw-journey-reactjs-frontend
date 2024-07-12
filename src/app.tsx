import React, { FormEvent, useState } from "react";
import LogoIcon from "../components/logo";
import {
  ArrowRight,
  AtSign,
  Calendar,
  Mail,
  MapPin,
  Plus,
  Settings2,
  User,
  UserRoundPlus,
  X,
} from "lucide-react";

function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState<boolean>(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState<boolean>(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      alert(`${email}, já está na lista!`);

      event.currentTarget.reset();
      return;
    }

    setEmailsToInvite((prev) => [...prev, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailsList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailsList);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="  max-w-3xl w-full px-6 text-center  space-y-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <LogoIcon />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex px-4 bg-zinc-900  h-16 rounded-xl items-center shadow-shape gap-3">
            <div className="flex gap-2 items-center flex-grow flex-shrink ">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                placeholder="Para onde você vai?"
              />
            </div>

            <div className="flex gap-2 items-center ">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestsInputOpen}
                type="text"
                className=" bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                placeholder="Quando?"
              />
            </div>

            <div className=" w-px h-6 bg-zinc-300" />

            {isGuestsInputOpen ? (
              <button
                className="bg-zinc-800 text-zinc-400 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 whitespace-nowrap"
                onClick={closeGuestsInput}
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                className="gap-2 px-5 py-2 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center hover:bg-lime-400"
                onClick={openGuestsInput}
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="flex px-4 bg-zinc-900  h-16 rounded-xl items-center shadow-shape gap-3">
              <button
                type="button"
                onClick={openGuestsModal}
                className="flex gap-2 items-center flex-grow flex-shrink "
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span className="bg-transparent text-lg text-zinc-100 outline-none flex-1 text-left">
                    {" "}
                    {emailsToInvite.length} pessoa(s)convidada(s)
                  </span>
                ) : (
                  <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-left">
                    {" "}
                    Quem estará na viagem?
                  </span>
                )}
              </button>

              <div className=" w-px h-6 bg-zinc-300" />

              <button
                className="gap-2 px-5 py-2 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center hover:bg-lime-400"
                onClick={openConfirmTripModal}
              >
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            {" "}
            políticas de privacidade.
          </a>
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[40rem] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-zinc-400">Selecionar convidados</h2>
                <button type="button" onClick={closeGuestsModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {emailsToInvite.map((email) => {
                return (
                  <div
                    key={email}
                    className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
                  >
                    <span className="text-zinc-300">{email}</span>
                    <button
                      type="button"
                      onClick={() => removeEmailFromInvites(email)}
                    >
                      <X className="size-4 text-zinc-400" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="w-full h-px bg-zinc-800"></div>

            <form
              onSubmit={addNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
            >
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do seu convidado"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button
                type="submit"
                className="gap-2 px-5 py-2 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center hover:bg-lime-400"
              >
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {isConfirmTripModalOpen && (
        <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[40rem] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg text-zinc-400">
                  Confirmar criação de viagem
                </h2>
                <button type="button" onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Para concluir a criação da viagem para{" "}
                <span className="font-semibold text-zinc-100">
                  Florianópolis, Brasil
                </span>{" "}
                nas datas de{" "}
                <span className="font-semibold text-zinc-100">
                  16 a 27 de Agosto de 2024
                </span>{" "}
                preencha seus dados abaixo:
              </p>
            </div>

            <form
              onSubmit={addNewEmailToInvite}
              className="flex flex-col space-y-3"
            >
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />

                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu email pessoal"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button
                type="submit"
                className="gap-2 px-5 h-11 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center justify-center hover:bg-lime-400"
              >
                Confirmar criação da viagem
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
