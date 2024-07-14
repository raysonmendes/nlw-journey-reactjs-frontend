import { ArrowRight, UserRoundPlus } from "lucide-react";
import React from "react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  emailsToInvite: string[];
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
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

      <Button onClick={openConfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
