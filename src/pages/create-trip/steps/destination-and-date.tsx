import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import React from "react";
import { Button } from "../../../components/button";

interface DestintionAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  openGuestsInput,
  closeGuestsInput,
}: DestintionAndDateStepProps) {
  return (
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
        <Button variant="secundary" onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
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
  );
}
