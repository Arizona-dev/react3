import React from "react";
import Header from '../Components/Header';

export default function Home() {


  return (
    <div className="App">
      <Header />
      <div>
    <section class="text-gray-800">
      <div class="max-w-6xl mx-auto px-5 py-4">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">Application REACT</h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            Présentation de l'api Leaflet et OpenDataSoft
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:-w1/2 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
                <span class="font-bold text-sm ">
                  Api
                </span>
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">Leaflet</h2>
              <p class="leading-relaxed text-base">Leaflet est une librairie Javascript de carte interactive open-source, responsive et mobile-friendly.</p>
              <a class="leading-relaxed text-base underline text-blue-500" href="https://leafletjs.com/">Découvrir Leaflet</a>
            </div>
          </div>

          <div class="xl:w-1/2 md:w-1/2 p-4">
            <div class="border border-gray-300 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 italic">
                <span class="font-bold text-sm ">
                  Api
                </span>
              </div>
              <h2 class="text-lg  font-medium title-font mb-2">OpenDataSoft</h2>
              <p class="leading-relaxed text-base">OpenDataSoft est une Api qui met à disposition plusieurs jeu de données gratuitement. Plusieurs types de données sont disponibles gratuitement.</p>
              <a class="leading-relaxed text-base underline text-blue-500" href="https://public.opendatasoft.com/api/v1/console/datasets/1.0/search/">Découvrir OpenDataSoft</a>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
    </div>
  );
}