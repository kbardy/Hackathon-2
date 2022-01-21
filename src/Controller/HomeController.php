<?php

// src/Controller/ProgramController.php

namespace App\Controller;

use App\Repository\CommentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;



class HomeController extends AbstractController
{
    #[Route('/', name: 'home_')]
    public function index(): Response
    {
        return $this->render('index.html.twig');
    }

    #[Route('/bathroom', name: 'bathroom')]
    public function bathroom(Request $request, CommentRepository $commentRepository): Response
    {
        //$q = $request->query->get('q');

       // if ($q == null) {
         //   $comments = [];
       // } else {
            //$comments = $commentRepository->findAll();
           //$comments = [
                //[
                  //  "image" => "maximeCom.jpg",
                    //"messages" => [
                      //  ["content" => "hello"],
                        //["content" => "world"],
                    //]
                //],
                //[
                  //  "image" => "manonCom.png",
                    //"messages" => [
                      //  ["content" => "breshtig"],
                        //["content" => "morgan"],
                    //]
                //]
            //];
        //}

        return $this->render('bathroom.html.twig');
    }
    

    #[Route('/pro', name: 'pro')]
    public function proFirst(): Response
    {
       return $this->render('pro.html.twig');
    }

    #[Route('/profile', name: 'profile')]
    public function proSecond(): Response
    {
        return $this->render('profile.html.twig');
    }
}
    
