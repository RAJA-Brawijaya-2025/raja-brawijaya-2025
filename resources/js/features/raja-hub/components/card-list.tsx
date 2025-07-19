import QuestionPage from './question';
import { useState, useRef, useEffect, useMemo } from 'react';
import EntryAnimation from '@/features/landing-page/components/entry-animation';

const faqData = [
  {
    id: 1,
    question: 'Bagaimana cara mengurus Kartu Tanda Mahasiswa (KTM)?',
    answer:
      'Syarat dan ketentuan pengurusan KTM lebih lengkap dapat dilihat disini: https://akademik.ub.ac.id/kepengurusan-ktm-baru/',
  },
  {
    id: 2,
    question: 'Apa yang harus dilakukan jika kehilangan KTM atau KTM rusak?',
    answer:
      'Jika KTM Hilang, mahasiswa cukup menyerahkan surat kehilangan dari kepolisian setempat. Jika KTM Rusak / Pindah Program Studi, mahasiswa cukup menyerahkan KTM Lama.',
  },
  {
    id: 3,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 4,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 5,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 6,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 7,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 8,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 9,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
  {
    id: 10,
    question: 'Bagaimana prosedur mengurus surat aktif kuliah?',
    answer:
      'Mahasiswa dapat mengajukan permohonan surat aktif kuliah melalui sistem online (SIAM atau layanan fakultas) dengan mengisi biodata.',
  },
];

const CardList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full flex relative flex-col items-center gap-y-4">
      <EntryAnimation type="slide" direction="up" duration={1} delay={0.2}>
        <img
          src="/assets/rajahub/ornaments.webp"
          alt="ornaments"
          className="w-[80vw] sm:w-[65vw] md:w-[45vw] lg:w-[40vw]"
        />
      </EntryAnimation>

      <EntryAnimation
        type="fade"
        duration={1}
        delay={0.2}
        className="w-full flex flex-col items-center lg:gap-y-[5vw] gap-y-[10vw]"
      >
        <QuestionPage
          items={faqData}
          onItemSelect={(item, index) => console.log(item, index)}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={false}
        />
      </EntryAnimation>
      <EntryAnimation type="slide" direction="up" duration={1} delay={0.2}>
        <img
          src="/assets/rajahub/ornaments.webp"
          alt="raja-hub"
          className="w-[80vw] sm:w-[65vw] md:w-[45vw] lg:w-[40vw] scale-y-[-1] mb-5"
        />
      </EntryAnimation>

      <EntryAnimation type="fade" duration={1} delay={0.2}>
        <img
          src="/assets/rajahub/batik-kuning.webp"
          alt="raja-hub"
          className=" absolute  top-0  left-0 w-[50vw] sm:w-[65vw] md:w-[45vw] lg:w-[30vw] "
        />
        <img
          src="/assets/rajahub/batik-kuning.webp"
          alt="raja-hub"
          className=" absolute  bottom-0  right-0 w-[50vw] sm:w-[65vw] md:w-[45vw] lg:w-[30vw] rotate-180"
        />
      </EntryAnimation>
    </div>
  );
};
export default CardList;
