import { Plus } from "lucide-react";
import React, { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Activity } from "./activity";

export function TripDetailsPage() {
  const [isCreatActivityModalOpen, setIsCreatActivityModalOpen] =
    useState<boolean>(false);

  function openCreatActivityModal() {
    setIsCreatActivityModalOpen(true);
  }
  function closeCreatActivityModal() {
    setIsCreatActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreatActivityModal}
              className="gap-2 px-5 py-2 bg-lime-300 rounded-lg text-lime-950 font-medium flex items-center hover:bg-lime-400"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            <Activity />
          </div>
        </div>
        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800"></div>

          <Guests />
        </div>

        {/* modall */}
        {isCreatActivityModalOpen && (
          <CreateActivityModal
            closeCreatActivityModal={closeCreatActivityModal}
          />
        )}
      </main>
    </div>
  );
}
