
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com","https://extensions.shopifycdn.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Cwf7UO8Y.js","/cdn/shopifycloud/checkout-web/assets/c1/app.DIpQjdPi.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.BPUAVeAN.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.BwQYPUiX.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.rN5ien6G.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.Cc2hybdn.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.BdZ3D_iU.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-errors.n4miqGcB.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-proposal.XbTTsV3n.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.ldRJLmaR.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.2LlIFFr_.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-extension-execution-errors.BYHpeP8S.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc.DJwumTDf.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error.BugxLw-Z.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.CxsWi4kb.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.DipMtGcU.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.CzYWxZ_N.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.55PE9LyH.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.CAizjsRK.js","/cdn/shopifycloud/checkout-web/assets/c1/color-contrast-colorContrast.BDH3f5Lf.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.CFcOtHmB.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.DiCxQZ7U.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.3VEcXYdj.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.2nVlodOG.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.Bz9Ki5V_.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.Cw-_gdyZ.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.DtVPckkU.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.BDPjeH_m.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.loDQP_Sg.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.DEis0u0g.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.CSQvZDLD.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.DxIayQnx.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover.C8_ju4To.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.T_wAHORW.js","/cdn/shopifycloud/checkout-web/assets/c1/Interaction-tracker.Cmu_2Zgq.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.5ZEvwUIE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.BRh1IaTm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useEcpSpiDebugLog.CE2RmKMu.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.CmirFrJz.js","/cdn/shopifycloud/checkout-web/assets/c1/Monorail-monorailMetric-wallets.qcu7MPUE.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.Bk7mpclg.js","/cdn/shopifycloud/checkout-web/assets/c1/EmptyState.Cx3Nm-Un.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.DJw7lwhs.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.B4V_GXj7.js","/cdn/shopifycloud/checkout-web/assets/c1/components-useVaultedMsiInstallments.C4KkvvU8.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.hD2ldM9w.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-context.DTGKSEBB.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.BHmU2hVX.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CwzSZa13.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.D2Ax5sa6.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.CkMdx9YN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useFilteredShopPayAvailablePaymentMethods.BNIRB-KL.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.DuNdu4Jz.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CPXZou5K.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.D66GjSg1.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.SnSERlwJ.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DueOoV7I.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-types.B2V5paB0.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge.Ceqnwd3f.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.BokMNc13.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod.DczufKHR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.GyK56M3E.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.CWxY7tZj.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-cash-monorail.BJEdC_Zz.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.BpeelIze.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.DdCIRjjd.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.BUv-QwlW.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.7wi-7JTQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.fIBrfFtC.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.x4fdjWJz.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.CpjuhSyw.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.Be4JLJjw.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.1PICYvMY.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.jF3E-jo4.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.UEnWtGNR.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.Cnnb75LK.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.BTjMOu5l.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.nnCgzBiu.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.D-Tw5-6m.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.DlIqTrWC.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.B0zWKBde.js","/cdn/shopifycloud/checkout-web/assets/c1/extensibility-browser-engine.DWrhvr7d.js","/cdn/shopifycloud/checkout-web/assets/c1/component-RuntimeExtension.D-SKjxnS.js","/cdn/shopifycloud/checkout-web/assets/c1/AnnouncementRuntimeExtensions.DzCsfs8m.js","/cdn/shopifycloud/checkout-web/assets/c1/QRCode.BRxu_bU0.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-dates.ChO2GdxN.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.CAqewdpy.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.Dx0TtjVX.js","/cdn/shopifycloud/checkout-web/assets/c1/EmailField.BAOGX3aG.js","/cdn/shopifycloud/checkout-web/assets/c1/Sheet.DQ_5R3OI.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-rendering-extension-targets.B8f1joP3.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-v4.EwEgHOG0.js","/cdn/shopifycloud/checkout-web/assets/c1/ExtensionsInner.2ESnHV51.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-host.BqAjlSl9.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox.C6K77SV1.worker.js","/cdn/shopifycloud/checkout-web/assets/c1/sandbox-2025-07.DpzA6bL0.worker.js","https://extensions.shopifycdn.com/shopifycloud/checkout-web/assets/c1/polyfills-entry-modern.oWckgtZS.worker.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BYT6yYGe.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/grouping.Cray4R9V.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.l6vaLTDB.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.BDn7-hvu.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.DhbMYMIx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useVaultedMsiInstallments.dhevUZ1f.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.tSP6pJcp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.jvH8TQL4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.0ZuT82rY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.CLVwzp6i.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/IncentiveBadge.C5mVOEBf.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShowShopPayOptin.87JMHPUK.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BbF1yV61.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RuntimeExtension.DWkDBM73.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/AnnouncementRuntimeExtensions.DWE5rRxz.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/QRCode.BZ_m5G5a.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Checkbox.CfwUdlpL.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.C8uylY0y.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Sheet.BiQjEGaX.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPaySessionTokenStorage.DfWUBaTh.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  