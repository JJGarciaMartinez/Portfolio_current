import Github from "@/icons/Github";
import Link from "@/icons/Link";
import styles from "./ProjectsLists.module.css";

export default function ProjectsLists({ contentProjects: projects }: any) {
  return (
    <div className={styles.projectsContainer}>
      <div className={styles.projectCardContainer}>
        <ul className={styles.projectsList}>
          {projects?.map(
            (
              { name, description, image, url, technologies, github }: any,
              index: number
            ) => (
              <li className={styles.projectCard} key={index}>
                <section className={styles.cardBody}>
                  <figure className="w-full rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Screenshot of ${name}`}
                      width={700}
                      height={700}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full duration-200"
                    />
                  </figure>
                </section>

                <section className={styles.cardInfo}>
                  <h2 className="text-lg font-bold mb-1 uppercase md:text-base lg:text-xl text-left">
                    {name}
                  </h2>
                  <p className="text-xs text-slate-300 lg:text-sm text-pretty text-left">
                    {description}
                  </p>

                  <ul className="flex flex-row flex-wrap gap-2">
                    {technologies?.map(
                      ({ name, logo, color }: any, index: number) => {
                        const colorHex = (color: string) => {
                          const [r, g, b] = color.split(",");

                          const [red, green, blue] = [r, g, b].map((value) =>
                            parseInt(value)
                          );

                          const redHex = red.toString(16).padStart(2, "0");
                          const greenHex = green.toString(16).padStart(2, "0");
                          const blueHex = blue.toString(16).padStart(2, "0");

                          // Combinar los valores hexadecimales para formar el color completo
                          const hexColor = `#${redHex}${greenHex}${blueHex}`;
                          // console.log(hexColor);
                          return hexColor;
                        };

                        return (
                          <li
                            style={{
                              backgroundColor: `rgba(${color},0.3)`,
                              borderWidth: "1px",
                              borderColor: `${colorHex(color)}`,
                            }}
                            className={`flex flex-row gap-1 items-center px-2 py-[2px] rounded-full !w-auto relative z-10 hint--bottom-right`}
                            aria-label={name}
                            key={index}
                          >
                            <figure
                              className="w-3 h-3 md:w-3 md:h-3 lg:w-4 lg:h-4"
                              id="technology"
                            >
                              <img
                                src={logo}
                                alt={name}
                                width={20}
                                height={20}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full"
                              />
                            </figure>
                          </li>
                        );
                      }
                    )}
                  </ul>

                  <span className={styles.cardLinks}>
                    {github ? (
                      <a href={github} target="_blank">
                        <figure>
                          <Github />
                        </figure>
                        <p>Repositorio</p>
                      </a>
                    ) : null}

                    {url ? (
                      <a href={url} target="_blank">
                        <figure>
                          <Link />
                        </figure>
                        <p>Visitar</p>
                      </a>
                    ) : null}
                  </span>
                </section>
              </li>
            )
          )}
          {projects && projects.length === 1 && (
            <li className={`${styles.projectCard} ${styles.projectEmpty}`}>
              <section className={styles.cardBody}>
                <figure className="w-full rounded-lg overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/juanjportfolio/image/upload/v1741570114/ScreenShots/369shots_so_avifhr.webp"
                    alt={`Screenshot of ${name}`}
                    width={700}
                    height={700}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full duration-200"
                  />
                </figure>
              </section>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
