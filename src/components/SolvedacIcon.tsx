import {
  Tier0Icon,
  Tier1Icon,
  Tier2Icon,
  Tier3Icon,
  Tier4Icon,
  Tier5Icon,
  Tier6Icon,
  Tier7Icon,
  Tier8Icon,
  Tier9Icon,
  Tier10Icon,
  Tier11Icon,
  Tier12Icon,
  Tier13Icon,
  Tier14Icon,
  Tier15Icon,
  Tier16Icon,
  Tier17Icon,
  Tier18Icon,
  Tier19Icon,
  Tier20Icon,
  Tier21Icon,
  Tier22Icon,
  Tier23Icon,
  Tier24Icon,
  Tier25Icon,
  Tier26Icon,
  Tier27Icon,
  Tier28Icon,
  Tier29Icon,
  Tier30Icon,
} from 'assets/svgs';

interface IProps {
  tier: number;
}

const SolvedacIcon = ({ tier }: IProps) => {
  return (
    {
      0: <Tier0Icon className='tier0Icon' />,
      1: <Tier1Icon className='tier1Icon' />,
      2: <Tier2Icon className='tier1Icon' />,
      3: <Tier3Icon className='tier1Icon' />,
      4: <Tier4Icon className='tier1Icon' />,
      5: <Tier5Icon className='tier1Icon' />,
      6: <Tier6Icon className='tier2Icon' />,
      7: <Tier7Icon className='tier2Icon' />,
      8: <Tier8Icon className='tier2Icon' />,
      9: <Tier9Icon className='tier2Icon' />,
      10: <Tier10Icon className='tier2Icon' />,
      11: <Tier11Icon className='tier3Icon' />,
      12: <Tier12Icon className='tier3Icon' />,
      13: <Tier13Icon className='tier3Icon' />,
      14: <Tier14Icon className='tier3Icon' />,
      15: <Tier15Icon className='tier3Icon' />,
      16: <Tier16Icon className='tier4Icon' />,
      17: <Tier17Icon className='tier4Icon' />,
      18: <Tier18Icon className='tier4Icon' />,
      19: <Tier19Icon className='tier4Icon' />,
      20: <Tier20Icon className='tier4Icon' />,
      21: <Tier21Icon className='tier5Icon' />,
      22: <Tier22Icon className='tier5Icon' />,
      23: <Tier23Icon className='tier5Icon' />,
      24: <Tier24Icon className='tier5Icon' />,
      25: <Tier25Icon className='tier5Icon' />,
      26: <Tier26Icon className='tier6Icon' />,
      27: <Tier27Icon className='tier6Icon' />,
      28: <Tier28Icon className='tier6Icon' />,
      29: <Tier29Icon className='tier6Icon' />,
      30: <Tier30Icon className='tier6Icon' />,
    }[tier] || <Tier0Icon className='tier0Icon' />
  );
};

export default SolvedacIcon;
