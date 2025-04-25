import { NavLink } from "react-router-dom";
import ReviewCard from "./cards/ReviewCard";
import Ratings from "./Ratings";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShinyButton from "./ShinyButton";

const UsersReview = () => {
  return (
    <div className="mb-20">
      <Carousel>
        <div className="mb-8 ">
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-5"> */}
          <h2 className="text-3xl mb-5 font-extrabold md:text-5xl text-primary-text">
            Reviewed by the community
          </h2>
          <div className="flex  items-center justify-between w-full ">
            <div className="flex flex-col md:flex-row md:items-center gap-1">
              <Ratings rating={4.8} />
              <NavLink
                className={
                  "hover:underline ml-2 mt-2 md:mt-0 text-button-gpt font-bold"
                }
                to={"/reviews"}
              >
                based on 3924 reviews
              </NavLink>
            </div>
            <div className="flex items-center gap-3">
              <CarouselPrevious className="bg-button-gpt hover:bg-button-gpt-hover hover:text-white text-white" />
              <CarouselNext className="bg-button-gpt hover:bg-button-gpt-hover hover:text-white text-white" />
            </div>
          </div>
        </div>

        <CarouselContent className="py-4">
          <CarouselItem>
            <div className="grid md:grid-cols-2 px-2 lg:grid-cols-3 gap-3">
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid md:grid-cols-2 px-2 lg:grid-cols-3 gap-3">
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "Spider Man",
                  avatar:
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
              <ReviewCard
                review={{
                  name: "MrWick",
                  avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  review:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sed aspernatur reiciendis quod animi magni nisi sunt.",
                  role: "Senior Dev",
                }}
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-center mt-10">
        {/* <Button
          variant={"noBg"}
          className="border-2 border-black hover:bg-slate-200"
          asChild */}
        {/* > */}
        <ShinyButton
          className="py-2 px-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
          href={"/reviews"}
        >
          See all reviews
        </ShinyButton>
        {/* </Button> */}
      </div>
    </div>
  );
};

export default UsersReview;
