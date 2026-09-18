/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const apps = [
    { name: 'mydocs', url: 'https://mydocs.chkontog.com' },
    { name: 'mydrive', url: 'https://mydrive.chkontog.com' },
    { name: 'myhiphopblog', url: 'https://myhiphopblog.chkontog.com' },
    { name: 'mynews', url: 'https://mynews.chkontog.com' },
    { name: 'mytranslate', url: 'https://mytranslate.chkontog.com' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-8 md:p-16">
      <header className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Καλώς ήρθατε στο chkontog.com</h1>
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
          Γεια σας! Είμαι ο δημιουργός αυτών των web εφαρμογών. 
          Μέσα από αυτό το hub, μπορείτε να εξερευνήσετε τα διάφορα project 
          στα οποία εργάζομαι.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Οι Εφαρμογές μου</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <a
              key={app.name}
              href={app.url}
              className="block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-medium text-slate-800">{app.name}</h3>
              <p className="text-sm text-slate-500 mt-2">{app.url}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-20 pt-8 border-t border-slate-200 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} chkontog.com</p>
      </footer>
    </div>
  );
}
