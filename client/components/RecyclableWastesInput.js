import React from "react";

function RecyclableWastesInput({ category, state, setState }) {
    return (
        <div>
            <p className="mb-2 text-sm text-gray-700">{category}</p>
            <div className="flex items-center mb-3">
                <input
                    value={state}
                    onChange={setState}
                    type="number"
                    className="px-2 py-1 text-right border w-28 restoreNumberArrows focus:outline-none"
                />
                <p className="ml-2 text-gray-400">kg</p>
            </div>
        </div>
    );
}

export default RecyclableWastesInput;
