import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto'

@Controller('posts')
export default class PostsController {
    constructor(
        private readonly postsService: PostsService
    ) { }

    @Get()
    getAllPosts() {
        return this.postsService.getAllPosts(); // TODO: Implement PostsService.getAllPosts
    }

    @Get(':id')
    getPostById(@Param('id') id: string) {
        return this.postsService.getPostById(Number(id)); // TODO: Implement PostsService.getPostById
    }

    @Post()
    async createPost(@Body() post: CreatePostDto) {
        return this.postsService.createPost(post); // TODO: Implement PostsService.createPost
    }

    @Put(':id')
    async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
        return this.postsService.replacePost(id, post); // TODO: Implement PostsService.replacePost
    }

    @Delete(':id')
    async deletePost(@Param('id') id: string) {
        this.postsService.deletePost(Number(id));
    }
}