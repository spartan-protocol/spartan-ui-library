import React from 'react'
// BRANDS
import { ReactComponent as Apple } from './svg/brands/apple-ios.svg'
// FLAGS
import { ReactComponent as TurkeyFlag } from './svg/flags/tr.svg'
// ICONS
import { ReactComponent as TxnsHistory } from './svg/icons/txns-history.svg'
import { ReactComponent as Analysis } from './svg/icons/analysis.svg'
import { ReactComponent as ArrowDown } from './svg/icons/arrow-down.svg'
import { ReactComponent as ArrowDownUp } from './svg/icons/arrow-down-up.svg'
import { ReactComponent as ArrowLeftRight } from './svg/icons/arrow-left-right.svg'
import { ReactComponent as ArrowLeft } from './svg/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from './svg/icons/arrow-right.svg'
import { ReactComponent as ArrowUp } from './svg/icons/arrow-up.svg'
import { ReactComponent as Close } from './svg/icons/close.svg'
import { ReactComponent as Colosseum } from './svg/icons/colosseum.svg'
import { ReactComponent as Connect } from './svg/icons/connect.svg'
import { ReactComponent as Contract } from './svg/icons/contract.svg'
import { ReactComponent as Copy } from './svg/icons/copy.svg'
import { ReactComponent as Cycle } from './svg/icons/cycle.svg'
import { ReactComponent as Fire } from './svg/icons/fire.svg'
import { ReactComponent as Helmet } from './svg/icons/helmet.svg'
import { ReactComponent as Home } from './svg/icons/home.svg'
import { ReactComponent as IconMissing } from './svg/icons/icon-missing.svg'
import { ReactComponent as Info } from './svg/icons/info.svg'
import { ReactComponent as List } from './svg/icons/list.svg'
import { ReactComponent as Lock } from './svg/icons/lock.svg'
import { ReactComponent as MenuOpen } from './svg/icons/menu-open.svg'
import { ReactComponent as MenuClose } from './svg/icons/menu-close.svg'
import { ReactComponent as Mint } from './svg/icons/mint.svg'
import { ReactComponent as Moon } from './svg/icons/moon.svg'
import { ReactComponent as Plus } from './svg/icons/plus.svg'
import { ReactComponent as Scan } from './svg/icons/scan.svg'
import { ReactComponent as Search } from './svg/icons/search.svg'
import { ReactComponent as Sun } from './svg/icons/sun.svg'
import { ReactComponent as Swap } from './svg/icons/swap.svg'
import { ReactComponent as SwapAdd } from './svg/icons/swap-add.svg'
import { ReactComponent as Sword } from './svg/icons/sword.svg'
import { ReactComponent as Swords } from './svg/icons/swords.svg'
import { ReactComponent as Synth } from './svg/icons/synth.svg'
import { ReactComponent as Trash } from './svg/icons/trash.svg'
import { ReactComponent as Upgrade } from './svg/icons/upgrade.svg'
import { ReactComponent as Vault } from './svg/icons/vault.svg'
import { ReactComponent as WalletRed } from './svg/icons/wallet-red.svg'
// SOCIALS
import { ReactComponent as Discord } from './svg/brands/discord.svg'
import { ReactComponent as Gitbook } from './svg/brands/gitbook.svg'
import { ReactComponent as Github } from './svg/brands/github.svg'
import { ReactComponent as Medium } from './svg/brands/medium.svg'
import { ReactComponent as Reddit } from './svg/brands/reddit.svg'
import { ReactComponent as Telegram } from './svg/brands/telegram.svg'
import { ReactComponent as Twitter } from './svg/brands/twitter.svg'
// TOKENS
import { ReactComponent as SpartaV1 } from './svg/tokens/spartav1.svg'
import { ReactComponent as SpartaV2 } from './svg/tokens/spartav2.svg'
import { ReactComponent as SpartaLP } from './svg/tokens/sparta-lp.svg'
import { ReactComponent as SpartaSynth } from './svg/tokens/sparta-synth.svg'
import { ReactComponent as Bnb } from './svg/tokens/bnb.svg'
import { ReactComponent as Busd } from './svg/tokens/busd.svg'
import { ReactComponent as Usd } from './svg/tokens/usd.svg'
import { ReactComponent as Usdc } from './svg/tokens/usdc.svg'
import { ReactComponent as Usdt } from './svg/tokens/usdt.svg'
// WALLETS
import { ReactComponent as BinanceChain } from './svg/brands/binance-chain.svg'
import { ReactComponent as Ledger } from './svg/brands/ledger.svg'
import { ReactComponent as MathWallet } from './svg/brands/math.svg'
import { ReactComponent as MetaMask } from './svg/brands/metamask.svg'
import { ReactComponent as TrustWallet } from './svg/brands/trust-wallet.svg'
import { ReactComponent as WalletConnect } from './svg/brands/walletconnect.svg'

const icons = {
  // BRANDS
  apple: Apple,
  // FLAGS
  turkeyFlag: TurkeyFlag,
  // ICONS
  txnsHistory: TxnsHistory,
  analysis: Analysis,
  arrowDown: ArrowDown,
  arrowDownUp: ArrowDownUp,
  arrowLeftRight: ArrowLeftRight,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  bin: Trash,
  close: Close,
  colosseum: Colosseum,
  connect: Connect,
  contract: Contract,
  copy: Copy,
  cycle: Cycle,
  fire: Fire,
  helmet: Helmet,
  home: Home,
  iconMissing: IconMissing,
  info: Info,
  list: List,
  lock: Lock,
  menuOpen: MenuOpen,
  menuClose: MenuClose,
  mint: Mint,
  moon: Moon,
  plus: Plus,
  scan: Scan,
  search: Search,
  sun: Sun,
  swap: Swap,
  swapAdd: SwapAdd,
  sword: Sword,
  swords: Swords,
  synth: Synth,
  trash: Trash,
  upgrade: Upgrade,
  vault: Vault,
  walletRed: WalletRed,
  // SOCIALS
  discord: Discord,
  gitbook: Gitbook,
  github: Github,
  medium: Medium,
  reddit: Reddit,
  telegram: Telegram,
  twitter: Twitter,
  // TOKENS
  spartav1: SpartaV1,
  spartav2: SpartaV2,
  spartaLp: SpartaLP,
  spartaSynth: SpartaSynth,
  bnb: Bnb,
  busd: Busd,
  usd: Usd,
  usdc: Usdc,
  usdt: Usdt,
  // WALLETS
  binanceChain: BinanceChain,
  ledger: Ledger,
  mathwallet: MathWallet,
  metamask: MetaMask,
  trustwallet: TrustWallet,
  walletconnect: WalletConnect,
}

/**
 * Get the custom icon from imported list.
 * If placing this inside an OverlayTrigger:
 * make sure you wrap it in span / div or similar
 * @param {string} icon id of the icon requested (required)
 * @param {string} className normal className string (optional)
 * @param {string} size width & height in one (optional)
 * @param {string} height height in px (optional)
 * @param {string} width width in px (optional)
 * @param {string} style (optional)
 * @returns {Component} Custom Icon imported as ReactComponent
 */
export const Icon = (props) => {
  let CustomIcon = icons[props.icon]
  if (CustomIcon === undefined) {
    CustomIcon = icons.iconMissing
  }
  return (
    <>
      <CustomIcon
        className={props.className || ''}
        height={props.size || props.height || '40'}
        width={props.size || props.width || '40'}
        fill={props.fill || 'white'}
        stroke={props.stroke || null}
        style={props.style || null}
        role={props.role || null}
      />
    </>
  )
}
