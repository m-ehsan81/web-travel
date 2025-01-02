import { footerItems } from './constant';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Image from 'next/image';

function LocationItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-[267px] text-white">
      <div className="flex items-center gap-2">
        <Icon icon={icon} fontSize={32} />
        <span className="text-[28px]">{title}</span>
      </div>
      <p className="text-[16px]">{description}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="m-10 mt-[80px] flex w-[calc(100%-80px)] flex-col gap-4 rounded-2xl bg-[#142D4D] px-10 py-6">
      <div className="flex justify-between">
        <div className="flex gap-20 text-white">
          {footerItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <p className="text-[28px] font-medium">{item.title}</p>

              <div className="flex flex-col gap-1">
                {item.subMenus.map((sub) => (
                  <Link
                    href="#"
                    key={sub.id}
                    className="text-[18px] font-medium"
                  >
                    {sub.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex gap-[32px]">
            <LocationItem
              icon="mingcute:location-line"
              title="آدرس"
              description="خیابان پیروزی، چهارراه کوکاکولا، انتهای خیابان دهقان، کوچه سلامی،
        پلاک 92، واحد 2"
            />

            <LocationItem
              icon="ic:outline-mark-email-unread"
              title="خبرنامه:"
              description=" لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
        استفاده از طراحان گرافیک است."
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <input
                placeholder="ایمیل شما"
                className="h-10 w-full rounded-lg border-2 border-[#7AD8FE] bg-transparent px-4 placeholder:text-white"
              />

              <button className="h-full w-[132px] rounded-lg bg-white text-[#142D4D]">
                ثبت ایمیل
              </button>
            </div>

            <div className="flex gap-3 text-white">
              <Link href="#">
                <Icon fontSize={40} icon="line-md:youtube" />
              </Link>
              <Link href="#">
                <Icon fontSize={40} icon="pajamas:twitter" />
              </Link>
              <Link href="#">
                <Icon fontSize={40} icon="stash:telegram" />
              </Link>
              <Link href="#">
                <Icon fontSize={40} icon="line-md:instagram" />
              </Link>
              <Link href="#">
                <Icon fontSize={40} icon="ic:baseline-whatsapp" />
              </Link>
              <Link href="#">
                <Icon fontSize={40} icon="ph:facebook-logo-bold" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] w-full bg-white" />

      <div className="flex items-center justify-between">
        <p className="text-[12px] font-light text-white">
          کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به
          شرکت نوا سفر می‌باشد. (نسخه 1.2.2)
        </p>

        <div className="flex gap-1">
          <Image
            alt="footer icon"
            src="/svg/footer-icon-1.svg"
            width={40}
            height={40}
          />
          <Image
            alt="footer icon"
            src="/svg/footer-icon-2.svg"
            width={40}
            height={40}
          />
          <Image
            alt="footer icon"
            src="/svg/footer-icon-3.svg"
            width={40}
            height={40}
          />
          <Image
            alt="footer icon"
            src="/svg/footer-icon-4.svg"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
