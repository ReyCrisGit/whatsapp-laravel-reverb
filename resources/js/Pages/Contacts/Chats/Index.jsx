import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { usePage } from '@inertiajs/react';

export default function Index({ auth }) {
    const { contact, chats } = usePage().props

    console.log(contact);

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <header className="bg-white dark:bg-verde-bg shadow">
                    <div className="flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight"> {contact.alias} </h2>
                        <a href={route('contacts.create')} className="dark:text-white dark:hover:bg-verde-bg-web/50  dark:active:bg-verde-bg-web -m-2 p-2 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                            </svg>
                        </a>
                    </div>
                </header>

                <div>
                    <table className='dark:text-black'>
                        <tbody>
                            {chats.map((chat, id) => (
                                <tr>
                                    { chat.trasmitter_user_id === auth.user.id ? (
                                        <td className='px-12'>
                                            { chat.message }
                                        </td>
                                    ) : (
                                        <td>
                                            { chat.message }
                                        </td>
                                    )}


                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>

            </AuthenticatedLayout>
        </>
    );
}