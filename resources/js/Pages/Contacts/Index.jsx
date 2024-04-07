import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from "@inertiajs/react";

export default function Index({ auth }) {

    const { contacts } = usePage().props;


    return (
        <AuthenticatedLayout
            user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contactos</h2>}
        >
            <header className="bg-white dark:bg-forest-green shadow">
                <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">Contactos</h2>
                    {/* <div className="dark:text-white">+</div> */}
                    <a href={route('contacts.create')} className="dark:text-white dark:hover:bg-apple-green/50  dark:active:bg-apple-green -m-2 p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                        </svg>
                    </a>
                </div>
            </header>
            <table class="min-w-full divide-y">
                <thead>
                    <tr>
                        <th class="text-center px-6 py-3 bg-gray-800 dark:bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider text-xl">Contactos</th>
                        <th class="text-center px-6 py-3 bg-gray-800 dark:bg-white text-left text-xs leading-4 font-medium text-black uppercase text-xl tracking-wider">Telefono</th>
                        <th class="text-center px-6 py-3 bg-gray-800 dark:bg-white text-left text-xs leading-4 font-medium text-black uppercase tracking-wider text-xl">Chats</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-pearl-gray">
                    {contacts.map((contact, index) => (
                        <tr className="dark:text-black text-sm" >
                            <td class="text-center sdark:bg-white px-6 py-4 whitespace-no-wrap">{contact.alias}</td>
                            <td class="text-center dark:bg-white px-6 py-4 whitespace-no-wrap">{contact.phone_code}</td>
                            <td class="text-center dark:bg-white px-6 py-4 whitespace-no-wrap">Chat</td>
                        </tr>

                    ))}
                </tbody>
            </table>
            {/* <table>
                <thead>
                    <tr className="dark:text-white">
                        <th>Contactos</th>
                        <th>Telefono</th>
                        <th>Chats</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact, index) => (
                        <tr className="dark:text-gray-200">
                            <td>{contact.alias}</td>
                            <td>{contact.phone_code}</td>
                            <td>Chat</td>
                        </tr>

                    ))}
                </tbody>
            </table> */}
        </AuthenticatedLayout>
    )



}