export const SAUDI_SCHOLARSHIP_CONFIG = {
    applicationStart: '2026-09-16',
    applicationEnd: '2026-10-06',
    isPortalOpen: false,

    /**
     * Government portals are currently closed.
     * Advance document preparation, translations, and profile evaluations are active.
     */
    getStatus: (): 'UPCOMING' | 'OPEN' | 'CLOSED' => {
        return 'CLOSED'
    }
}
