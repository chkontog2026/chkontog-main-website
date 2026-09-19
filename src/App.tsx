/** * @license * SPDX-License-Identifier: Apache-2.0 */
export default function App() {
  const apps = [
    { name: 'mydocs', url: 'https://mydocs.chkontog.com', description: 'Κεντρικό σύστημα διαχείρισης και οργάνωσης εγγράφων.', color: 'border-blue-200 hover:border-blue-400' },
    { name: 'mydrive', url: 'https://mydrive.chkontog.com', description: 'Ασφαλής αποθήκευση και κοινή χρήση αρχείων στο cloud.', color: 'border-emerald-200 hover:border-emerald-400' },
    { name: 'myhiphopblog', url: 'https://myhiphopblog.chkontog.com', description: 'Hip-hop νέα, κουλτούρα και προσωπικές απόψεις.', color: 'border-amber-200 hover:border-amber-400' },
    { name: 'mynews', url: 'https://mynews.chkontog.com', description: 'Συγκεντρωτική ροή ειδήσεων από διάφορες πηγές.', color: 'border-purple-200 hover:border-purple-400' },
    { name: 'mytranslator', url: 'https://mytranslator.chkontog.com', description: 'Εργαλείο μετάφρασης κειμένου σε πραγματικό χρόνο.', color: 'border-rose-200 hover:border-rose-400' },
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
              className={`block p-6 bg-white border ${app.color} rounded-xl shadow-sm hover:shadow-md transition-all duration-200`}
            >
              <h3 className="text-xl font-medium text-slate-800">{app.name}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{app.description}</p>
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
