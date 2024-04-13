
import React, { useState } from 'react';



export default function Chat () {
    return (
        <div className="App">
          <div className="min-h-screen bg-neutral-800 flex items-center justify-center">
            <div className="bg-neutral-800 shadow-md rounded-lg p-6 w-full max-w-md">
              <div className="space-y-4">
                <div className="overflow-y-auto h-96 bg-white p-4 rounded-lg">
                  {/* This is where chat messages would appear */}
                </div>
                <form  className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    placeholder="Type your message..."
                
                  />
                  <button
                    type="submit"
                    className="bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }