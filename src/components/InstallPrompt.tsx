import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [showIosHelp, setShowIosHelp] = useState(false);
  const [bannerReady, setBannerReady] = useState(false);

  const isStandalone = useMemo(() => {
    const iosStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone;
    return window.matchMedia('(display-mode: standalone)').matches || Boolean(iosStandalone);
  }, []);

  const isIos = useMemo(
    () => /iphone|ipad|ipod/i.test(window.navigator.userAgent),
    []
  );

  const isAndroid = useMemo(
    () => /android/i.test(window.navigator.userAgent),
    []
  );

  useEffect(() => {
    // Delay short so it feels intentional and not abrupt.
    const timer = window.setTimeout(() => setBannerReady(true), 1800);

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setDismissed(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      setDismissed(true);
    }
    setDeferredPrompt(null);
  };

  const shouldShow = !dismissed && !isStandalone && bannerReady;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.aside
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="fixed bottom-24 left-4 right-4 z-[60] mx-auto max-w-md rounded-3xl border border-bakery-pink/30 bg-white/95 p-4 shadow-2xl backdrop-blur"
        >
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Cerrar"
          >
            <X size={16} />
          </button>

          <p className="pr-7 text-sm font-semibold text-gray-800">
            Instala Delicias by Eli y abre la pagina como una app en tu telefono.
          </p>

          <div className="mt-3 flex items-center gap-2">
            {deferredPrompt && (
              <button
                type="button"
                onClick={handleInstallClick}
                className="inline-flex items-center gap-2 rounded-full bg-bakery-green px-4 py-2 text-sm font-bold text-white hover:bg-bakery-gold"
              >
                <Download size={16} />
                Instalar app
              </button>
            )}

            {isIos && !deferredPrompt && (
              <button
                type="button"
                onClick={() => setShowIosHelp((prev) => !prev)}
                className="rounded-full border border-bakery-pink/40 px-4 py-2 text-sm font-bold text-bakery-green hover:bg-bakery-cream"
              >
                Como instalar en iPhone
              </button>
            )}

            {!isIos && !deferredPrompt && (
              <button
                type="button"
                onClick={() => setShowIosHelp((prev) => !prev)}
                className="rounded-full border border-bakery-pink/40 px-4 py-2 text-sm font-bold text-bakery-green hover:bg-bakery-cream"
              >
                Ver instrucciones
              </button>
            )}
          </div>

          {showIosHelp && (
            <div className="mt-3 text-xs text-gray-600 space-y-1">
              {isIos && (
                <p>
                  En Safari: toca Compartir y luego Anadir a pantalla de inicio.
                </p>
              )}
              {!isIos && (
                <p>
                  {isAndroid
                    ? 'En Chrome Android: menu (tres puntos) y luego Instalar aplicacion o Agregar a pantalla de inicio.'
                    : 'En Chrome/Edge: abre el menu del navegador y pulsa Instalar aplicacion.'}
                </p>
              )}
              {!deferredPrompt && (
                <p className="text-[11px] text-gray-500">
                  Si no aparece la opcion, navega unos segundos por el sitio y recarga la pagina.
                </p>
              )}
            </div>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default InstallPrompt;
