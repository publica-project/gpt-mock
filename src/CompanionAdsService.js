import Service from './Service';

/**
 * Companion Ads service. This service is used by video ads to show companion ads.
 */
export default class CompanionAdsService extends Service {
  /**
   * Creates a new CompanionAdsService.
   *
   * @param {GPT} gpt The containing {@link GPT} instance.
   */
  constructor(gpt) {
    super(gpt, CompanionAdsService._name);
    this._options = {
      syncLoading: false,
      refreshUnfilledSlots: null
    };
  }

  /**
   * The name of the service.
   *
   * @type {string}
   * @private
   */
  static get _name() {
    return 'companion_ads';
  }

  /**
   * Enables the service implementation to be loaded synchronously. This needs
   * to be called before {@link GPT#enableServices}.
   *
   * Note: this call can be only used if gpt.js is also loaded synchronously,
   * for example, by using a script element. If called when {@link GPT} is loaded
   * asynchronously, the outcome of the loading is undefined.
   */
  enableSyncLoading() {
    this._options.syncLoading = true;
  }

  /**
   * Sets whether companion slots that have not been filled will be automatically
   * backfilled. Only slots that are also registered with the {@link PubAdsService} will
   * be backfilled. This method can be called multiple times during the page's
   * lifetime to turn backfill on and off.
   *
   * @param {boolean} value true to automatically backfill unfilled slots,
   * false to leave them unchanged.
   */
  setRefreshUnfilledSlots(value) {
    this._options.refreshUnfilledSlots = value;
  }

  /* Undocumented
    refreshAllSlots()
    fillSlot(a, b, c, d)
    notifyUnfilledSlots(a)
    setClearUnfilledSlots(a)
    getDisplayAdsCorrelator()
    getVideoStreamCorrelator()
    isRoadblockingSupported()
    isSlotAPersistentRoadblock()
  */
}
