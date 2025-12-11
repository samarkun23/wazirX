"use client"

import React from "react"

export function PrimaryButton({ children, onClick }: {
    children: React.ReactNode,
    onClick: () => void
}) {
    return <button onClick={onClick} type="button" className="text-white bg-white/20 hover:bg-dark-strong focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        {children}
    </button>
}

export function SecondaryButton({ children, onClick, prefix }: {
    children: React.ReactNode,
    onClick: () => void,
    prefix?: React.ReactNode
}) {
    return <button onClick={onClick} type="button" className="px-6 py-3 rounded-xl bg-indigo-600/65 backdrop-blur-md text-white font-semibold text-lg hover:bg-indigo-700 transition" 
    >
        <div>
            {prefix}
        </div>
        <div>
            {children}
        </div>
    </button>
}

export function BlurButton({ children, onClick, prefix }: {
    children: React.ReactNode,
    onClick: () => void,
    prefix?: React.ReactNode
}) {
    return <button onClick={onClick} type="button" className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur-md text-white font-semibold text-lg hover:bg-white/30 transition"
    >
        <div>
            {prefix}
        </div>
        <div>
            {children}
        </div>
    </button>
}